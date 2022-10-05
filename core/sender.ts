import { Noti, NotiMethod, NotiResult } from './type'
import { NotiReceiver } from './receiver'


// 消息发送方
export namespace NotiSender {
    
    type Sender = {
        send: (param: SendParam) => Promise<NotiResult>
    }

    type SendParam = {
        noti: Noti
        method: NotiMethod
        receivers: NotiReceiver[]
    }

    export function instance() {
        return new NotiSender()
    }

    class NotiSender implements Sender {
        send: (param: SendParam) => Promise<NotiResult>
    }

    
}