import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'professional',
  title: 'Professional',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Main image',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'typeOf',
      title: 'Type of professional',
      type: 'string',
      options: {
        list: [
          {title: 'Executive', value: 'executive'},
          {title: 'Leadership', value: 'leadership'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          title: 'title',
          type: 'string',
        },
      ]
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          title: 'title',
          type: 'string',
        },
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
