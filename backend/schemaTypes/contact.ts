import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
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
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'fullname',
    },
  },
})
