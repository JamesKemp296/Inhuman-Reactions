export const BLUE = "#2B87D1"
export const OFF_WHTIE = "#e5e8f4" // body color
export const MINT_GREEN = "#2BD1B0"
export const ORANGE = "#FF9245"

export enum Icon {
  Speed,
  Target,
  Squares,
  Hearing,
  Keyboard,
  Numbers,
  Book,
}

export const cardSelectionArray = [
  {
    title: "Reaction Time",
    subTitle: "Test your visual reflexes.",
    icon: Icon.Speed,
    isAvailable: true,
  },
  {
    title: "Aim Trainer",
    subTitle: "How quickly can you click all the targets?",
    icon: Icon.Target,
    isAvailable: false,
  },
  {
    title: "Chimp Test",
    subTitle: "Are you smarter than a chimpanzee?",
    icon: Icon.Squares,
    isAvailable: false,
  },
  {
    title: "Visual Memory",
    subTitle: "Remember an increasingly large board of squares.",
    icon: Icon.Squares,
    isAvailable: false,
  },
  {
    title: "Hearing",
    subTitle:
      "A test for high frequency hearing loss, the most common form of hearing loss.",
    icon: Icon.Hearing,
    isAvailable: false,
  },
  {
    title: "Typing",
    subTitle: "How many words can you type per minute?",
    icon: Icon.Keyboard,
    isAvailable: false,
  },
  {
    title: "Number Memory",
    subTitle: "Test your visual reflexes",
    icon: Icon.Numbers,
    isAvailable: false,
  },
  {
    title: "Visual Memory",
    subTitle: "Test your visual reflexes",
    icon: Icon.Book,
    isAvailable: false,
  },
  {
    title: "Reaction Time",
    subTitle: "Test your visual reflexes",
    icon: Icon.Speed,
    isAvailable: false,
  },
]
