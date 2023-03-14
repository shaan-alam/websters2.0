import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      title: 'Participation Type',
      name: 'participationType',
      type: 'string',
      options: {
        list: [
          { title: 'Individual', value: 'individual' },
          { title: 'Team', value: 'team' },
        ],
      },
    },),
    defineField({
      name: 'minTeamSize',
      title: 'Min Team Size',
      type: 'number',
    }),

    defineField({
      name: 'maxTeamSize',
      title: 'Max Team Size',
      type: 'number',
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "poster",
    },
  },
})
