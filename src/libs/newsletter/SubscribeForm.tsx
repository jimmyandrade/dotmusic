import {
  Box,
  type BoxProps,
  Button,
  Grid,
  Kbd,
  Select,
  TextField,
} from '@radix-ui/themes';
import type { FC } from 'react';

export const SubscribeForm: FC<BoxProps> = ({
  className = '',
  id,
  ...props
}: Readonly<BoxProps>) => (
  <Box asChild class={className} id={id ?? SubscribeForm.name} {...props}>
    <form>
      <Grid
        asChild
        columns={{
          initial: '1',
          sm: '3',
        }}
        gap="4"
      >
        <fieldset>
          <TextField.Root
            id="email"
            autoComplete="email"
            autoCorrect="off"
            name="email"
            placeholder="Seu e-mail"
            required
            size="3"
            type="email"
          ></TextField.Root>
          <TextField.Root
            id="tel"
            autoComplete="tel-national"
            autoCorrect="off"
            name="tel"
            placeholder="Seu telefone"
            required
            size="3"
            type="tel"
          ></TextField.Root>
          <Select.Root autoComplete="address-level1" required size="3">
            <Select.Trigger placeholder="Escolha seu estado&hellip;" />
            <Select.Content class="w-full">
              <Select.Group>
                <Select.Item value="BR-MG">MG - Minas Gerais</Select.Item>
                <Select.Item value="BR-SP">SP - São Paulo</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </fieldset>
      </Grid>

      <Box asChild>
        <small>
          Ao fornecer essas informações, você está optando em receber e-mails
          e/ou ligações e mensagens de texto de{' '}
          <strong>Jimmy&nbsp;Andrade</strong>
          &nbsp;com notícias, ofertas especiais, promoções e mensagens criadas
          para seus interesses, e você aceita a nossa Política de Privacidade e
          nossos Termos de Uso. O consentimento não é uma condição para compra e
          não é exigido para utilizar nossos serviços. A frequência de mensagens
          pode variar. Responda <Kbd>pare</Kbd> a qualquer momento para parar de
          receber nossas&nbsp;comunicações.
        </small>
      </Box>
      <Box class="mx-auto">
        <Button type="submit">Assinar</Button>
      </Box>
    </form>
  </Box>
);
