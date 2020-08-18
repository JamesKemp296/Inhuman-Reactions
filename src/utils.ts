export const BLUE = "#2B87D1"
export const RED = "#CE2635"
export const GREEN = "#4BDB6A"
export const LIGHT_BLUE = "#45b1ff"
export const OFF_WHTIE = "#e5e8f4" // body color
export const MINT_GREEN = "#2BD1B0"
export const ORANGE = "#FF9245"
export const LIGHT_GREY = "#C2C2C2"
export const DARK_GREY = "#858585"

export const SM_MEDIA_QUERY = "(max-width:600px)"

export enum Icon {
  Speed,
  Target,
  Squares,
  Hearing,
  Keyboard,
  Numbers,
  Book,
}

export enum GameLink {
  Reaction = "/tests/reaction-time",
  None = "",
}

export const cardSelectionArray = [
  {
    title: "Reaction Time",
    subTitle: "Test your visual reflexes.",
    icon: Icon.Speed,
    isAvailable: true,
    link: GameLink.Reaction,
  },
  {
    title: "Aim Trainer",
    subTitle: "How quickly can you click all the targets?",
    icon: Icon.Target,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Chimp Test",
    subTitle: "Are you smarter than a chimpanzee?",
    icon: Icon.Squares,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Visual Memory",
    subTitle: "Remember an increasingly large board of squares.",
    icon: Icon.Squares,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Hearing",
    subTitle: "A test for high frequency hearing loss, the most common form.",
    icon: Icon.Hearing,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Typing",
    subTitle: "How many words can you type per minute?",
    icon: Icon.Keyboard,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Number Memory",
    subTitle: "Test your visual reflexes",
    icon: Icon.Numbers,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Visual Memory",
    subTitle: "Test your visual reflexes",
    icon: Icon.Book,
    isAvailable: false,
    link: GameLink.None,
  },
  {
    title: "Reaction Time",
    subTitle: "Test your visual reflexes",
    icon: Icon.Speed,
    isAvailable: false,
    link: GameLink.None,
  },
]

// interfaces

export interface ReactionTimeGameData {
  startTime: number
  isGameStarted: boolean
  isRoundStarted: boolean
}
