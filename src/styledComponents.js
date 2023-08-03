import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #25262c;
`

export const CentralContainer = styled.div`
  width: 75%;
  height: 70%;
  background-color: #1b1c22;
  border: 0px;
  border-radius: 10px;
`

export const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  height: 100%;
`
export const Con1 = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const Heading = styled.h1`
  color: #f1f5f9;
  font-size: 20px;
`

export const ImageElement = styled.div`
  width: 320px;
  height: 320px;
  align-self: center;
`

export const Image = styled.img`
  width: 100%;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #cbd5e1;
  margin: 20px;
  width: 45%;
  height: 90%;
  border-radius: 10px;
`

export const UlButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 10px;

  margin-top: 0px;
  margin-bottom: 0px;
`

export const BoldButton = styled.button`
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0px;
`

export const ItalicButton = styled.button`
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0px;
`

export const UnderlinedButton = styled.button`
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0px;
`

export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
  margin-top: 0px;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.fontWeight ? 'bold' : 'normal')};
  font-style: ${props => (props.fontStyle ? 'italic' : 'normal')};
  text-decoration: ${props => (props.textDecoration ? 'underline' : 'normal')};
  background-color: transparent;
  border: 0px;
  color: #f8fafc;
  margin: 20px;
  outline: none;
  font-size: 16px;
`
