# Input Component

Diretiva para estilizar inputs e textareas com Tailwind CSS e sistema de variantes.

## Como usar

### Import

```typescript
import { ZardInputDirective } from "./components/input/input";
```

### Exemplos

#### Input básico

```html
<input z-input type="text" placeholder="Digite algo..." />
```

#### Com tamanhos diferentes

```html
<input z-input zSize="sm" placeholder="Input pequeno" />
<input z-input zSize="default" placeholder="Input padrão" />
<input z-input zSize="lg" placeholder="Input grande" />
```

#### Com status (erro, warning, sucesso)

```html
<input z-input zStatus="error" placeholder="Input com erro" />
<input z-input zStatus="warning" placeholder="Input com warning" />
<input z-input zStatus="success" placeholder="Input com sucesso" />
```

#### Sem borda

```html
<input z-input [zBorderless]="true" placeholder="Input sem borda" />
```

#### Textarea

```html
<textarea z-input placeholder="Digite sua mensagem..."></textarea> <textarea z-input zSize="lg" placeholder="Textarea grande"></textarea>
```

#### Com Angular Forms

```html
<input z-input [formControl]="emailControl" type="email" placeholder="Email" /> <textarea z-input [formControl]="messageControl" placeholder="Mensagem"></textarea>
```

## Propriedades

| Propriedade   | Tipo                                | Padrão      | Descrição                  |
| ------------- | ----------------------------------- | ----------- | -------------------------- |
| `zSize`       | `'default' \| 'sm' \| 'lg'`         | `'default'` | Tamanho do input           |
| `zStatus`     | `'error' \| 'warning' \| 'success'` | `undefined` | Status visual do input     |
| `zBorderless` | `boolean`                           | `false`     | Remove bordas e focus ring |
| `class`       | `ClassValue`                        | `''`        | Classes CSS adicionais     |
