import React from "react"
import { observer } from "mobx-react-lite"

import { Loading, Error } from "./utils"
import { useQuery } from "../models"

export const MessageWall = observer(() => {
  const { loading, data, error } = useQuery(store =>
    store.queryMessages(
      {
        offset: undefined,
        count: 3,
        replyTo: undefined
      },
      m => m.text.timestamp.user().name.avatar.close()
    )
  )

  if (loading) return <Loading />
  if (error) return <Error>{error}</Error>
  return (
    <ul>
      {data.map(message => (
        <li>
          <b>{message.user.name}</b>: {message.text}
          <hr />
        </li>
      ))}
    </ul>
  )
})
