import React from 'react'
import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, CircularProgress } from '@chakra-ui/react'


const KeywordsModal = ({ keywords, loading, modalIsOpen, closeModal}) => {

  return (
    <>
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Keywords</ModalHeader>
                <ModalCloseButton/>

                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    {loading ? (
                        <CircularProgress isIndeterminate color='blue.300'/>
                    ) : (
                        <Text>{keywords}</Text>
                    )                        }
                </ModalBody>

                <ModalFooter colorScheme='blue' mr={3} onClick={closeModal}>
                    <Button>Close</Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </>
  )
}

export default KeywordsModal