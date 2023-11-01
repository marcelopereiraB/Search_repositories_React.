import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Stack,
  Link,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { RepositoriesRepo } from '../../repositories/repositories.repo';
import { RepositoriesModel } from '../../domain/repositories.model';

export const Home = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<RepositoriesModel>();
  const repo = new RepositoriesRepo();

  const getResponse = async () => {
    const res = repo.getRepositories(value);
    setData(await res);
  };

  return (
    <Box minHeight={'100vh'} mt={'15px'}>
      <Box display={'block'} width={'fit-content'} m={'0 auto'}>
        <InputLabel>Pesquisar Repositórios</InputLabel>
        <OutlinedInput
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') getResponse();
          }}
          endAdornment={
            <InputAdornment position="end" onClick={getResponse}>
              <IconButton edge="end">
                <Icon icon={'material-symbols-light:search'} height={30} />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      {data?.total_count && (
        <Typography
          textAlign={'center'}
        >{`Aproximadamente ${data?.total_count} resultados`}</Typography>
      )}
      <Box>
        {data?.items.map((item) => {
          return (
            <Box
              key={item.id}
              border={'1px black solid'}
              borderRadius={'10px'}
              width={'600px'}
              height={'fit-content'}
              p={'10px'}
              display={'block'}
              m={'10px auto'}
            >
              <Typography
                fontSize={'22px'}
                fontWeight={'bold'}
                color={'#3896D2'}
                textAlign={'left'}
                style={{ textDecoration: 'underline' }}
              >
                <Link
                  underline={'none'}
                  href={item.html_url}
                  color={'inherit'}
                  target="_blank"
                >
                  {item.full_name}
                </Link>
              </Typography>
              <Typography fontSize={'20px'} fontWeight={'bold'}>
                {item.name}
              </Typography>
              <Typography>{item.description}</Typography>
              <Stack flexDirection={'row'}>
                <Icon icon={'ph:git-fork'} height={20} />
                <Typography>{item.forks}</Typography>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
