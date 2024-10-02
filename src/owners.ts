import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";

export const ownersData = [
  {
    id: 572949,
    name: "Ella Olson",
    username: "ella-olsson",
    stars: 1,
    avatar_url: "https://images.pexels.com/users/avatars/572949/ella-olsson-169.jpeg"
  },

  {
    id: 324989,
    name: "Kevin Menajang",
    username: "kevinmenajang",
    stars: 0,
    avatar_url: "https://images.pexels.com/users/avatars/324989/kevin-menajang-679.jpeg"
  },
  
  {
    id: 222549,
    name: "Quang Nguyen Vinh",
    username: "quang-nguyen-vinh",
    stars: 6,
    avatar_url: "https://images.pexels.com/users/avatars/222549/quang-nguyen-vinh-611.jpeg"
  },
  
  {
    id: 545066,
    name: "Burst",
    username: "burst",
    stars: 0,
    avatar_url: "https://images.pexels.com/lib/avatars/purple.png"
  },
  
  {
    id: 122861,
    name: "Ash Craig",
    username: "ash-craig",
    stars: 0,
    avatar_url: "https://images.pexels.com/users/avatars/122861/ash-craig-647.jpeg"
  },
];

export const OwnerType = new GraphQLObjectType({
  name: 'Owner',
  fields: () => ({
    username: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString, },
    stars: { type: GraphQLInt, },
    avatar_url: { type: GraphQLString, },
  }),
});

export const owners = new Map<number, {}>();
ownersData.forEach(owner => {
  owners.set(owner.id, owner);
});

export const getOwnerById = (ownerId: number) => {
  return owners.get(ownerId);
};

export const getOwners = () => {
  return ownersData;
};
