import { Box, Typography, Stack, Link } from '@mui/material';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <Box bottom={0} width={'100%'} mx={'5px'} bgcolor={'#282829'}>
      <Stack
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'row'}
        width={'100%'}
        alignItems={'center'}
      >
        <Typography color={'#fffafa'} fontSize={'28px'}>
          Marcelo Pereira Barbosa da Silva ©
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="https://github.com/marcelopereiraB"
            target="_blank"
            color={'#fffafa'}
          >
            <Icon icon={'ri:github-fill'} height={90} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcelo-pereira-6623a0231/"
            target="_blank"
            color={'#fffafa'}
          >
            <Icon icon={'fa6-brands:linkedin'} height={90} />
          </Link>
          <Link
            href="https://wa.me//5581995447267?text=Já%20pode%20mandar%20o%20contrato!%20hahahaha :)"
            target="_blank"
            color={'#fffafa'}
          >
            <Icon icon={'ic:twotone-whatsapp'} height={90} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
