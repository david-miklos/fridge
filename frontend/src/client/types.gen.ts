// This file is auto-generated by @hey-api/openapi-ts

export type Body_login_login_access_token = {
  grant_type?: string | null;
  username: string;
  password: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};

/**
 * Class for family data to be returned via API
 */
export type FamilyPublic = {
  name: string;
  invite_code?: string;
  id: string;
};

export type HTTPValidationError = {
  detail?: Array<ValidationError>;
};

/**
 * Database  model for List
 */
export type List = {
  name: string;
  is_family_list?: boolean;
  /**
   * Hex color code in the format #1138CC
   */
  color?: string;
  id?: string;
  user_id?: string | null;
  family_id?: string | null;
};

export type ListCreate = {
  name: string;
  is_family_list?: boolean;
  /**
   * Hex color code in the format #1138CC
   */
  color?: string;
};

/**
 * Class for display list data to be returned via API.
 */
export type ListDisplay = {
  name: string;
  is_family_list?: boolean;
  /**
   * Hex color code in the format #1138CC
   */
  color?: string;
  id: string;
  task_count: number;
};

/**
 * Class for list data to be returned via API.
 */
export type ListPublic = {
  name: string;
  is_family_list?: boolean;
  /**
   * Hex color code in the format #1138CC
   */
  color?: string;
  id: string;
};

/**
 * Class for display lists data to be returned via API.
 */
export type ListsPublic = {
  data: Array<ListDisplay>;
  count: number;
};

/**
 * Update model for List
 */
export type ListUpdate = {
  name?: string | null;
  /**
   * Hex color code in the format #1138CC
   */
  color?: string | null;
};

/**
 * Class representing the message model.
 */
export type Message = {
  message: string;
};

/**
 * Database  model for List
 */
export type Task = {
  title: string;
  notes?: string | null;
  completed?: boolean;
  id?: string;
  created_at?: string;
  updated_at?: string;
  user_id: string;
  list_id: string;
};

/**
 * Class for creating task.
 */
export type TaskCreate = {
  title: string;
  notes?: string | null;
  completed?: boolean;
  user_id: string;
  list_id: string;
};

/**
 * Class for list data to be returned via API.
 */
export type TaskPublic = {
  title: string;
  notes?: string | null;
  completed?: boolean;
  id: string;
};

/**
 * Class for display lists data to be returned via API.
 */
export type TasksPublic = {
  data: Array<Task>;
  count: number;
};

/**
 * Class for updating task.
 */
export type TaskUpdate = {
  title: string;
  notes?: string | null;
  completed?: boolean;
  user_id: string;
};

/**
 * Class representing the JSON payload containing an access token and its type.
 */
export type Token = {
  access_token: string;
  token_type?: string;
};

/**
 * Class for user creation with additional password field.
 */
export type UserCreate = {
  email: string;
  name?: string | null;
  is_admin?: boolean;
  password: string;
};

/**
 * Class for user data to be returned via API, including the user's ID.
 */
export type UserPublic = {
  email: string;
  name?: string | null;
  is_admin?: boolean;
  id: string;
  family_id: string | null;
};

/**
 * Class for user data to be returned via API
 */
export type UsersPublic = {
  data: Array<UserPublic>;
  count: number;
};

export type ValidationError = {
  loc: Array<string | number>;
  msg: string;
  type: string;
};

export type FamiliesCreateFamilyData = {
  name: string;
};

export type FamiliesCreateFamilyResponse = FamilyPublic;

export type FamiliesJoinFamilyData = {
  inviteCode: string;
};

export type FamiliesJoinFamilyResponse = FamilyPublic;

export type FamiliesReadFamilyMembersData = {
  familyId: string;
};

export type FamiliesReadFamilyMembersResponse = UsersPublic;

export type FamiliesReadFamilyInviteCodeData = {
  familyId: string;
};

export type FamiliesReadFamilyInviteCodeResponse = string;

export type ListsReadPersonalListsResponse = ListsPublic;

export type ListsReadFamilyListsResponse = ListsPublic;

export type ListsReadListData = {
  listId: string;
};

export type ListsReadListResponse = List;

export type ListsUpdateListData = {
  listId: string;
  requestBody: ListUpdate;
};

export type ListsUpdateListResponse = ListPublic;

export type ListsDeleteListData = {
  listId: string;
};

export type ListsDeleteListResponse = Message;

export type ListsCreateListData = {
  requestBody: ListCreate;
};

export type ListsCreateListResponse = ListPublic;

export type LoginLoginAccessTokenData = {
  formData: Body_login_login_access_token;
};

export type LoginLoginAccessTokenResponse = Token;

export type LoginTestTokenResponse = UserPublic;

export type PingPingResponse = unknown;

export type TasksReadTasksData = {
  limit?: number;
  listId: string;
  skip?: number;
};

export type TasksReadTasksResponse = TasksPublic;

export type TasksCreateTaskData = {
  requestBody: TaskCreate;
};

export type TasksCreateTaskResponse = TaskPublic;

export type TasksUpdateTaskData = {
  requestBody: TaskUpdate;
  taskId: string;
};

export type TasksUpdateTaskResponse = TaskPublic;

export type TasksDeleteTaskData = {
  taskId: string;
};

export type TasksDeleteTaskResponse = Message;

export type TasksUpdateTaskStatusData = {
  completed: boolean;
  taskId: string;
};

export type TasksUpdateTaskStatusResponse = TaskPublic;

export type TasksClearTasksData = {
  listId: string;
};

export type TasksClearTasksResponse = Message;

export type UsersReadUserMeResponse = UserPublic;

export type UsersReadUserData = {
  userId: string;
};

export type UsersReadUserResponse = UserPublic;

export type UsersRegisterUserData = {
  requestBody: UserCreate;
};

export type UsersRegisterUserResponse = UserPublic;

export type UsersPromoteUserData = {
  userId: string;
};

export type UsersPromoteUserResponse = Message;
