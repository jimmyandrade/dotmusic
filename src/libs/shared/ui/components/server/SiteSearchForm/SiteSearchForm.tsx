import { Button, Flex, Quote, TextField } from '@radix-ui/themes';
import type { FC } from 'react';

export type SiteSearchFormProps = TextField.RootProps;

export const SiteSearchForm: FC<SiteSearchFormProps> = ({
  defaultValue,
  ...props
}: Readonly<SiteSearchFormProps>) => (
  <Flex asChild gapX={'2'}>
    <form action="/buscar" method="GET">
      <fieldset class="w-full">
        <TextField.Root
          class="flex-grow"
          defaultValue={defaultValue}
          id="q"
          name="q"
          placeholder="Pesquisar em JimmyAndrade.music, JYVERSO e sites relacionados"
          size="3"
          type="search"
          {...props}
        ></TextField.Root>
        <small>
          Dica: você pode pesquisar por letras de música. Tente descobrir de
          onde vem a letra <Quote>Quando você me ligou&hellip;</Quote>
        </small>
      </fieldset>

      <Button size="3" type="submit">
        Pesquisar
      </Button>
    </form>
  </Flex>
);
