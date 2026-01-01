import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('renders the todo app title', () => {
    render(<App />)
    expect(screen.getByText('📝 Todo App')).toBeInTheDocument()
  })

  it('renders input field and add button', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('adds a new todo when clicking add button', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'Buy groceries' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Buy groceries')).toBeInTheDocument()
  })

  it('adds a new todo when pressing Enter key', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')

    fireEvent.change(input, { target: { value: 'Walk the dog' } })
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(screen.getByText('Walk the dog')).toBeInTheDocument()
  })

  it('clears input after adding a todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'Test todo' } })
    fireEvent.click(addButton)

    expect(input.value).toBe('')
  })

  it('does not add empty todos', () => {
    render(<App />)
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.click(addButton)

    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
  })

  it('toggles todo completion status', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'Complete this task' } })
    fireEvent.click(addButton)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })

  it('deletes a todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'Delete me' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Delete me')).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: /delete todo/i })
    fireEvent.click(deleteButton)

    expect(screen.queryByText('Delete me')).not.toBeInTheDocument()
  })

  it('filters todos correctly', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add/i })

    // Add two todos
    fireEvent.change(input, { target: { value: 'Active todo' } })
    fireEvent.click(addButton)
    fireEvent.change(input, { target: { value: 'Completed todo' } })
    fireEvent.click(addButton)

    // Complete second todo
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[1])

    // Test Active filter
    const activeButton = screen.getByRole('button', { name: 'Active' })
    fireEvent.click(activeButton)
    expect(screen.getByText('Active todo')).toBeInTheDocument()
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument()

    // Test Completed filter
    const completedButton = screen.getByRole('button', { name: 'Completed' })
    fireEvent.click(completedButton)
    expect(screen.queryByText('Active todo')).not.toBeInTheDocument()
    expect(screen.getByText('Completed todo')).toBeInTheDocument()

    // Test All filter
    const allButton = screen.getByRole('button', { name: 'All' })
    fireEvent.click(allButton)
    expect(screen.getByText('Active todo')).toBeInTheDocument()
    expect(screen.getByText('Completed todo')).toBeInTheDocument()
  })
})