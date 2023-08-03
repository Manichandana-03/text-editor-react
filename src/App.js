import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  CentralContainer,
  ImageElement,
  ImageContainer,
  Heading,
  HrElement,
  EditorContainer,
  UlButtonContainer,
  BoldButton,
  ItalicButton,
  UnderlinedButton,
  TextArea,
  Image,
  Con1,
} from './styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isTextBold: false,
    isTextItalic: false,
    isTextUnderlined: false,
  }

  boldClicked = () => {
    this.setState(prevState => ({isTextBold: !prevState.isTextBold}))
  }

  italicClicked = () => {
    this.setState(prevState => ({isTextItalic: !prevState.isTextItalic}))
  }

  underlinedClicked = () => {
    this.setState(prevState => ({
      isTextUnderlined: !prevState.isTextUnderlined,
    }))
  }

  render() {
    const {isTextBold, isTextItalic, isTextUnderlined} = this.state
    return (
      <MainContainer>
        <CentralContainer>
          <ImageContainer>
            <Con1>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  alt="text editor"
                />
              </ImageElement>
            </Con1>
            <EditorContainer>
              <UlButtonContainer>
                <li>
                  <BoldButton
                    onClick={this.boldClicked}
                    type="button"
                    color={isTextBold}
                    data-testid="bold"
                  >
                    <VscBold size={25} />
                  </BoldButton>
                </li>
                <li>
                  <ItalicButton
                    onClick={this.italicClicked}
                    type="button"
                    color={isTextItalic}
                    data-testid="italic"
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlinedButton
                    onClick={this.underlinedClicked}
                    type="button"
                    color={isTextUnderlined}
                    data-testid="underline"
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlinedButton>
                </li>
              </UlButtonContainer>
              <HrElement />
              <TextArea
                type="text"
                fontWeight={isTextBold}
                fontStyle={isTextItalic}
                textDecoration={isTextUnderlined}
                rows={15}
              />
            </EditorContainer>
          </ImageContainer>
        </CentralContainer>
      </MainContainer>
    )
  }
}

export default App
