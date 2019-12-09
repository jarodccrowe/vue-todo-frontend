import { mutations } from '@/store'

const { updateAddTaskFormOpen } = mutations

describe('mutations', () => {
  it('Changes the add form to open', () => {
    const state = { formOpen: false }

    updateAddTaskFormOpen(state, true)
    expect(state.formOpen).toBe(true)
  })
})