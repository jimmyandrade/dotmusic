import { Button, Flex, TextField } from '@radix-ui/themes';

export type SiteSearchFormProps = TextField.RootProps;

export const SiteSearchForm = ({
  defaultValue,
  ...props
}: SiteSearchFormProps) => (
  <Flex asChild gapX={'2'}>
    <form>
      <TextField.Root
        className="flex-grow"
        defaultValue={defaultValue}
        id="q"
        name="q"
        placeholder="Pesquisar em JimmyAndrade.music, JYVERSO e sites relacionados"
        size="3"
        type="search"
        {...props}
      />
      <Button size="3" type="submit">
        Pesquisar
      </Button>
    </form>
  </Flex>
);
