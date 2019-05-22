/* This is a mst-sql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"

import { UserModel } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { MessageModel } from "./MessageModel"
import { RootStore } from "./index"

/**
 * MessageBase
 * auto generated base class for the model MessageModel.
 */
export const MessageModelBase = MSTGQLObject
  .named('Message')
  .props({
    __typename: types.optional(types.literal("Message"), "Message"),
    id: types.identifier,
    timestamp: types.maybe(types.number),
    user: types.maybe(MSTGQLRef(types.late(() => UserModel))),
    text: types.maybe(types.string),
    likes: types.optional(types.array(MSTGQLRef(types.late(() => UserModel))), []),
    replyTo: types.maybe(MSTGQLRef(types.late((): any => MessageModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class MessageModelSelector<PARENT=unknown> extends QueryBuilder<PARENT> {
  get id() { return this.__attr(`id`) }
  get timestamp() { return this.__attr(`timestamp`) }
  get text() { return this.__attr(`text`) }
  user(): UserModelSelector<this> { return this.__child(`user`, UserModelSelector) as any }
  get userRef() { return this.__ref(`user`, UserModelSelector) }
  likes(): UserModelSelector<this> { return this.__child(`likes`, UserModelSelector) as any }
  get likesRef() { return this.__ref(`likes`, UserModelSelector) }
  replyTo(): MessageModelSelector<this> { return this.__child(`replyTo`, MessageModelSelector) as any }
  get replyToRef() { return this.__ref(`replyTo`, MessageModelSelector) }
}

export function selectFromMessage() {
  return new MessageModelSelector()
}

export const messageModelPrimitives = selectFromMessage().id.timestamp.text.build()

