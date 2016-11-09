import './css/common.css'
import { Observable } from '@reactivex/rxjs'
import { createUser } from './js/createUser'
import { getUser } from './js/getUser'

const $enter = document.getElementById('search_input')
const $addbtn = document.getElementById('search_btn')
const $userList = document.querySelector('.user-list')

const add$ = Observable.fromEvent($addbtn, 'click')
    .do(() => console.log('add btn'))

const enter$ = Observable.fromEvent($enter, 'keydown')
    .filter( e => e.keyCode === 13)
    .do(() => console.log('enter'))

const input$ = enter$.merge(add$)


const item$ = input$
    .map(() => $enter.value)
    .filter(v => v !== '')
    .switchMap(getUser)
    .do(r => console.log(r))
    .map((r) => createUser(r.response))
    .do((ele) => {
        $userList.appendChild(ele)
        $enter.value = ''
    })
    .publishReplay(1)
    .refCount()

const toggle$ = item$.mergeMap($user => {
    const $islike = $user.lastElementChild.firstElementChild.firstElementChild;
    console.log($islike)
    return Observable.fromEvent($islike, 'click')
    .filter( e => e.target === $islike)
    .mapTo($islike)
})
    .do(($islike) => {
        if ($islike.classList.contains('dislike')) {
            $islike.className = 'like'
        } else {
             $islike.className = 'dislike'
        }
    })

const remove$ = item$.mergeMap(($user) => {
    const $remove = $user.lastElementChild.lastElementChild
    return Observable.fromEvent($remove, 'click')
        .filter( e => e.target === $remove)
        .mapTo($user)
})
    .do(($user) => {
        const $parent = $user.parentNode
        $parent.removeChild($user)
    })

const app$ = toggle$.merge(remove$)

app$.subscribe();