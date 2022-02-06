import React from 'react'
import { Button, Image, Modal, Icon} from 'semantic-ui-react'
import FileUpload from './FileUpload'

function Receipt() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
            <Button animated='fade'>
                <Button.Content hidden>Upload Receipt</Button.Content>
                <Button.Content visible>
                    <Icon name='upload' />
                </Button.Content>
            </Button>
        }
        size="mini"
    >
      <Modal.Header>Upload Receipt</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <FileUpload />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Receipt