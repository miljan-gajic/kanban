import {type Component } from 'solid-js'

type TextInputProps = {
  fieldName: string

}

const TextInput: Component<TextInputProps> = ({fieldName}) => {
  return (
    <input type="text" name={fieldName} />
  )
}

export default TextInput