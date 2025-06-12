import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'mobile',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'firstname',
    },
  },
})
