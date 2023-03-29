import { useState } from "react";
import { Textarea, Button, useToast, Text } from "@chakra-ui/react";


const TextInput = ({ extractKeywords }) => {
    const [text, setText] = useState('')
    const [numWords, setNumWords] = useState(0)

    const toast = useToast()


    const submitText = () => {
        if (text==='') {
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text to extract keywords',
                status: 'error',
                duration: 5000,
                isClosable: false
            })
        }
        else{
            extractKeywords(text)
        }
    } 

    return(
        <>
            <Textarea bg='blue.400'
                      color='white'
                      padding={4}
                      marginTop={6}
                      height={200}
                      value={text}
                      onChange={(e)=>{setText(e.target.value)
                                      if (e.target.value.length>0) setNumWords(e.target.value.trim().split(/\s+/).length)
                                      else                         setNumWords(0)}  
                                }/>

            <Text marginTop={1}>{numWords} words</Text>

            <Button bg='blue.500'
                    color='white'
                    marginTop={4}
                    width='100%'
                    _hover={{bg: 'blue.700'}}
                    onClick={submitText}>
                Extract Keywords
            </Button>
        </>
    )
}

export default TextInput