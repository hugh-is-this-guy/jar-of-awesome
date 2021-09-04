const INTRO_ITEMS = [
    {
      title: "➕",
      note: "Add your first awesome",
      list: "awesomes"
    }, {
      title: "🔎",
      note: "Check your Todo tab",
      list: "awesomes"
    }, {
      title: "✔",
      note: "Complete your first todo",
      list: "todo"
    }, {
      title: "🗑",
      note: "Delete your introduction awesomes",
      list: "awesomes"
    }
]

export default function addIntroItems(userbase) {
  userbase.insertItem({
    databaseName: "awesomes",
    item: INTRO_ITEMS[0]
  })
  .then(() => {
    userbase.insertItem({
      databaseName: "awesomes",
      item: INTRO_ITEMS[1]
    })
  })
  .then(() => {
    userbase.insertItem({
      databaseName: "awesomes",
      item: INTRO_ITEMS[2]
    })
  })
  .then(() => {
    userbase.insertItem({
      databaseName: "awesomes",
      item: INTRO_ITEMS[3]
    })
  })
}
