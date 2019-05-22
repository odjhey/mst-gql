import * as React from "react"
import { observer } from "mobx-react-lite"

import { MessageModelType } from "../models/"

export const Message = observer(
  ({ message }: { message: MessageModelType }) => {
    return (
      <li className="message">
        <img src={message.user.avatar} width={200} height={200} />
        <div className="content">
          <h4>{message.user.name}</h4>
          <p>{message.text}</p>
          <div className="buttons">
            <div className={"like"}>💙</div>
          </div>
        </div>
      </li>
    )
  }
)
