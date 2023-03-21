import { Subject } from "rxjs";

const subject = new Subject();

export const subscriber = {
    clickOnButton: action => subject.next(action),
    subscribeOnClick: () => subject.asObservable()
}