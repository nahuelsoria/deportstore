import { ButtonGroup, Container, IconButton, Stack, Text} from '@chakra-ui/react'
import { EmailIcon} from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="#" aria-label="E-Mail" icon={<EmailIcon />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
  )
}

export default Footer