import {Static, Type} from "@sinclair/typebox"

export const userSchema = Type.Object({
    email: Type.String(),
    name: Type.Optional(Type.String()),      //opzionale ma se c'è è una stringa
}, {additionalProperties: false})   //così non si possono aggiungere altri dati oltre a questi

export type UserData = Static<typeof userSchema>
