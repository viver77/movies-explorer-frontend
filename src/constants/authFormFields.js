export const NAME =
    {
            id: 1,
            name: 'name',
            type: 'text',
            label: 'Имя',
            placeholder: 'Имя',
            required: true,
            regexp: '[a-zA-Z А-Яа-я -]{2,30}',
            errorMessage: 'Поле Имя может содержать только латиницу, кириллицу, пробел или дефис.',
    };

export const EMAIL =
    {
            id: 2,
            name: 'email',
            type: 'email',
            label: 'E-mail',
            placeholder: 'Почта',
            required: true,
    }

export const PASSWORD =
    {
            id: 3,
            name: 'password',
            type: 'password',
            label: 'Пароль',
            placeholder: 'Пароль',
            required: true,
    }
