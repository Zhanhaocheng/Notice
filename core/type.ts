export type Noti = {
    title: string
    body: string
}

export type NotiMethod = 
    'dial'  |
    'sms'   |
    'email' |
    'wx'

export type NotiResult = {
    success: boolean
    message?: string
}