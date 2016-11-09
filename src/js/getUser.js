import { Observable } from '@reactivex/rxjs'

export const getUser = (userObj) => {
    return Observable.ajax({
        url: `https://api.github.com/users/${userObj}`,
        method: 'get'
    })
}