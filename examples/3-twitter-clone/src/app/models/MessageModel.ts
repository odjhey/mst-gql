import { MessageModelBase } from "./MessageModel.base"

/* The TypeScript type of an instance of MessageModel */
export type MessageModelType = typeof MessageModel.Type

/* A graphql query fragment containing all the primitive fields of MessageModel */
export { messageModelPrimitives } from "./MessageModel.base"

/**
 * MessageModel
 */
export const MessageModel = MessageModelBase
