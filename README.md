# Custom errors

Small util for convenient error handling.

## Installation

```sh
npm install @42px/custom-errors
```

## Usage


```js
import { createCustomError } from '@42px/custom-errors'
import { findRoom, doRoomStuff, showError } from 'rooms'

const RoomNotFound = createCustomError('RoomNotFound')

async function findAndProceed(id) {
    const room = await findRoom(id)
    if (!room) {
      throw new RoomNotFound()
    }
    doRoomStuff(room)
}

findAndProceed(1)
    .catch((err) => {
        if(err.name === 'RoomNotFound') showError('Sorry, room not found')
    })

```
