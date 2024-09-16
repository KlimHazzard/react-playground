export const nodes = [
  { id: "classroom", name: "Classroom", parent: null },
  { id: "classroom_id", name: "classroom_id", parent: "classroom" },
  { id: "classroom_name", name: "name", parent: "classroom" },
  {
    id: "classroom_organization_id",
    name: "organization_id",
    parent: "classroom",
  },
  {
    id: "classroom_whatsapp_bot_id",
    name: "whatsapp_bot_id",
    parent: "classroom",
  },

  { id: "organization", name: "Organization", parent: null },
  { id: "organization_id", name: "organization_id", parent: "organization" },
  { id: "organization_name", name: "name", parent: "organization" },

  { id: "whatsapp_bot", name: "Whatsapp_bot", parent: null },
  { id: "whatsapp_bot_id", name: "whatsapp_bot_id", parent: "whatsapp_bot" },
  {
    id: "whatsapp_bot_organization_id",
    name: "organization_id",
    parent: "whatsapp_bot",
  },

  {
    id: "classroom_organization_user",
    name: "Classroom_organization_user",
    parent: null,
  },
  {
    id: "classroom_organization_user_id",
    name: "classroom_organization_user_id",
    parent: "classroom_organization_user",
  },
  {
    id: "classroom_organization_user_classroom_id",
    name: "classroom_id",
    parent: "classroom_organization_user",
  },
  {
    id: "classroom_organization_user_organization_user_id",
    name: "organization_user_id",
    parent: "classroom_organization_user",
  },
  {
    id: "classroom_organization_user_organization_id",
    name: "organization_id",
    parent: "classroom_organization_user",
  },

  { id: "organization_user", name: "Organization_user", parent: null },
  {
    id: "organization_user_id",
    name: "organization_user_id",
    parent: "organization_user",
  },
  {
    id: "organization_user_organization_id",
    name: "organization_id",
    parent: "organization_user",
  },
  {
    id: "organization_user_user_id",
    name: "user_id",
    parent: "organization_user",
  },

  { id: "invitation", name: "Invitation", parent: null },
  { id: "invitation_id", name: "invitation_id", parent: "invitation" },
  {
    id: "invitation_organization_id",
    name: "organization_id",
    parent: "invitation",
  },

  { id: "lesson", name: "Lesson", parent: null },
  { id: "lesson_id", name: "lesson_id", parent: "lesson" },
  { id: "lesson_classroom_id", name: "classroom_id", parent: "lesson" },
  { id: "lesson_organization_id", name: "organization_id", parent: "lesson" },

  { id: "lesson_feedback", name: "Lesson_feedback", parent: null },
  {
    id: "lesson_feedback_id",
    name: "lesson_feedback_id",
    parent: "lesson_feedback",
  },
  {
    id: "lesson_feedback_lesson_id",
    name: "lesson_id",
    parent: "lesson_feedback",
  },
  {
    id: "lesson_feedback_user_id",
    name: "user_id",
    parent: "lesson_feedback",
  },

  { id: "message", name: "Message", parent: null },
  { id: "message_id", name: "message_id", parent: "message" },
  { id: "message_user_id", name: "user_id", parent: "message" },
  { id: "message_lesson_id", name: "lesson_id", parent: "message" },
  {
    id: "message_organization_id",
    name: "organization_id",
    parent: "message",
  },
  {
    id: "message_whatsapp_bot_id",
    name: "whatsapp_bot_id",
    parent: "message",
  },

  { id: "user", name: "User", parent: null },
  { id: "user_id", name: "user_id", parent: "user" },
  { id: "user_current_lesson_id", name: "current_lesson_id", parent: "user" },
  {
    id: "user_current_organization_id",
    name: "current_organization_id",
    parent: "user",
  },

  { id: "phone_verification", name: "Phone_verification", parent: null },
  {
    id: "phone_verification_id",
    name: "phone_verification_id",
    parent: "phone_verification",
  },
  {
    id: "phone_verification_user_id",
    name: "user_id",
    parent: "phone_verification",
  },
];

export const relationships = [
  // Tree structure for each table, excluding null parents
  ...nodes
    .filter((node) => node.parent !== null)
    .map((node) => ({
      id: `tree_${node.id}`,
      type: "RELATED_TO",
      from: node.parent,
      to: node.id,
    })),

  // Relationships between properties
  {
    id: "1",
    type: "RELATED_TO",
    from: "classroom_organization_id",
    to: "organization_id",
  },
  {
    id: "2",
    type: "RELATED_TO",
    from: "classroom_whatsapp_bot_id",
    to: "whatsapp_bot_id",
  },
  {
    id: "3",
    type: "RELATED_TO",
    from: "classroom_organization_user_classroom_id",
    to: "classroom_id",
  },
  {
    id: "4",
    type: "RELATED_TO",
    from: "classroom_organization_user_organization_user_id",
    to: "organization_user_id",
  },
  {
    id: "5",
    type: "RELATED_TO",
    from: "classroom_organization_user_organization_id",
    to: "organization_id",
  },
  {
    id: "6",
    type: "RELATED_TO",
    from: "invitation_organization_id",
    to: "organization_id",
  },
  {
    id: "7",
    type: "RELATED_TO",
    from: "lesson_classroom_id",
    to: "classroom_id",
  },
  {
    id: "8",
    type: "RELATED_TO",
    from: "lesson_organization_id",
    to: "organization_id",
  },
  {
    id: "9",
    type: "RELATED_TO",
    from: "lesson_feedback_lesson_id",
    to: "lesson_id",
  },
  {
    id: "10",
    type: "RELATED_TO",
    from: "lesson_feedback_user_id",
    to: "user_id",
  },
  {
    id: "11",
    type: "RELATED_TO",
    from: "message_user_id",
    to: "user_id",
  },
  {
    id: "12",
    type: "RELATED_TO",
    from: "message_lesson_id",
    to: "lesson_id",
  },
  {
    id: "13",
    type: "RELATED_TO",
    from: "message_organization_id",
    to: "organization_id",
  },
  {
    id: "14",
    type: "RELATED_TO",
    from: "message_whatsapp_bot_id",
    to: "whatsapp_bot_id",
  },
  {
    id: "15",
    type: "RELATED_TO",
    from: "organization_user_organization_id",
    to: "organization_id",
  },
  {
    id: "16",
    type: "RELATED_TO",
    from: "organization_user_user_id",
    to: "user_id",
  },
  {
    id: "17",
    type: "RELATED_TO",
    from: "phone_verification_user_id",
    to: "user_id",
  },
  {
    id: "18",
    type: "RELATED_TO",
    from: "user_current_lesson_id",
    to: "lesson_id",
  },
  {
    id: "19",
    type: "RELATED_TO",
    from: "user_current_organization_id",
    to: "organization_id",
  },
  {
    id: "20",
    type: "RELATED_TO",
    from: "whatsapp_bot_organization_id",
    to: "organization_id",
  },
].filter((rel) => rel.from !== null && rel.to !== null) as {
  id: string;
  type: string;
  from: string;
  to: string;
}[];
