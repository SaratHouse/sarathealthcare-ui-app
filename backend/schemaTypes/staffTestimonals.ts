export default {
  name: 'staffTestimonal',
  title: 'Staff Testimonal',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],

  preview: {
    select: {
      title: 'author',
      // author: 'author.name',
      // media: 'mainImageUrl',
    },
  },
}
