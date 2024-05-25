export const newGoal = {
    id: "",
    myGoal: "",
    numberTime: "",
    unitTime: "min",
    days : [
        {id: 'monday',
         dayIsActive: false},
        {id: 'tuesday',
         dayIsActive: false},
        {id: 'wednesday',
         dayIsActive: false},
        {id: 'thursday',
         dayIsActive: false},
        {id: 'friday',
         dayIsActive: false},
        {id: 'saturday',
         dayIsActive: false},
        {id: 'sunday',
         dayIsActive: false}
    ],
    date: new Date(),
    task: [],
    percentage: 0,
}
export const myListOfGoals = [
  {
    id: 'SPT5610WTejco4tKB15Q7',
    myGoal: 'Create a new App', 
    numberTime: '10',
    unitTime: 'min',
    days: [
      { id: 'monday'   , dayIsActive: true },
      { id: 'tuesday'  , dayIsActive: true },
      { id: 'wednesday', dayIsActive: true },
      { id: 'thursday' , dayIsActive: true },
      { id: 'friday'   , dayIsActive: true },
      { id: 'saturday' , dayIsActive: true },
      { id: 'sunday'   , dayIsActive: true }
    ],
    date: new Date('2024-08-17T02:49:46.000Z'),
    task: [
      { task: 'Open a new account', 
        isDone: false,
        id: 'FzsNy6FkXUzSK-9sll5uW' },
      { task: 'Buy a computer', 
        isDone: false,
        id: 'OdRKyWx4OzBF-XhSV5-bJ' }
    ],
    percentage: 0,
  },
  {
    id: 'RXOQsj0WTejco4tKB15QC',
    myGoal: 'Buy a car',
    numberTime: '1',
    unitTime: 'min',
    days: [
      {id: 'monday',    dayIsActive: false},
      {id: 'tuesday',   dayIsActive: false},
      {id: 'wednesday', dayIsActive: false},
      {id: 'thursday',  dayIsActive: true},
      {id: 'friday',    dayIsActive: false},
      {id: 'saturday',  dayIsActive: false},
      {id: 'sunday',    dayIsActive: true}
    ],
    date: new Date('2024-06-28T02:49:46.000Z'),
    task: [
      {
        task: 'Save 30 dollars',
        isDone: false,
        id: '7Dcaw3Wxfyne7IjvSgy2M'
      },
      {
        task: 'Not eating outside',
        isDone: false,
        id: 'uUkA3ro40YsylhGAIfoUo'
      }
    ],
    percentage: 0,
  },
  {
    id: 'RX8gjs0WTejco4tKNj25O',
    myGoal: 'Learn React',
    numberTime: '20',
    unitTime: 'min',
    days: [
      {id: 'monday',    dayIsActive: true},
      {id: 'tuesday',   dayIsActive: false},
      {id: 'wednesday', dayIsActive: true},
      {id: 'thursday',  dayIsActive: true},
      {id: 'friday',    dayIsActive: false},
      {id: 'saturday',  dayIsActive: false},
      {id: 'sunday',    dayIsActive: true}
    ],
    date: new Date('2025-01-28T02:49:46.000Z'),
    task: [
      {
        task: 'Learn Props',
        isDone: false,
        id: '5Dgaw3Wxfyne7IjvSgy2M'
      },
      {
        task: 'Learn React Router',
        isDone: false,
        id: 'sTpA3ro40YsylhGAIfoUo'
      }
    ],
    percentage: 0,
  }
]
