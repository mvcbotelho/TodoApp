const INITIAL_STATE = {
  description: 'Estudar React',
  list: [{
    _id: 0,
    description: 'Ver aula do Curso React + Redux',
    done: true
  }, {
    _id: 1,
    description: 'Terminar módulo 1 do curso GoNative',
    done: false
  }, {
    _id: 2,
    description: 'Terminar módulo três do ReactJS do DevPleno',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGE':
      return { ...state, description: action.payload }
    default:
      return state
  }
}