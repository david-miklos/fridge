// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type {
  FamiliesCreateFamilyData,
  FamiliesCreateFamilyResponse,
  FamiliesJoinFamilyData,
  FamiliesJoinFamilyResponse,
  FamiliesReadFamilyMembersData,
  FamiliesReadFamilyMembersResponse,
  FamiliesReadFamilyInviteCodeData,
  FamiliesReadFamilyInviteCodeResponse,
  ListsReadPersonalListsResponse,
  ListsReadFamilyListsResponse,
  ListsReadListData,
  ListsReadListResponse,
  ListsUpdateListData,
  ListsUpdateListResponse,
  ListsDeleteListData,
  ListsDeleteListResponse,
  ListsCreateListData,
  ListsCreateListResponse,
  LoginLoginAccessTokenData,
  LoginLoginAccessTokenResponse,
  LoginTestTokenResponse,
  PingPingResponse,
  TasksReadTasksData,
  TasksReadTasksResponse,
  TasksCreateTaskData,
  TasksCreateTaskResponse,
  TasksUpdateTaskData,
  TasksUpdateTaskResponse,
  TasksDeleteTaskData,
  TasksDeleteTaskResponse,
  TasksUpdateTaskStatusData,
  TasksUpdateTaskStatusResponse,
  TasksClearTasksData,
  TasksClearTasksResponse,
  UsersReadUserMeResponse,
  UsersReadUserData,
  UsersReadUserResponse,
  UsersRegisterUserData,
  UsersRegisterUserResponse,
  UsersPromoteUserData,
  UsersPromoteUserResponse,
} from "./types.gen";

export class FamiliesService {
  /**
   * Create Family
   * Create new family.
   * @param data The data for the request.
   * @param data.name
   * @returns FamilyPublic Successful Response
   * @throws ApiError
   */
  public static createFamily(
    data: FamiliesCreateFamilyData,
  ): CancelablePromise<FamiliesCreateFamilyResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/families/",
      query: {
        name: data.name,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Join Family
   * Join a family.
   * @param data The data for the request.
   * @param data.inviteCode
   * @returns FamilyPublic Successful Response
   * @throws ApiError
   */
  public static joinFamily(
    data: FamiliesJoinFamilyData,
  ): CancelablePromise<FamiliesJoinFamilyResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/families/join",
      query: {
        invite_code: data.inviteCode,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Read Family Members
   * Reads family members.
   * @param data The data for the request.
   * @param data.familyId
   * @returns UsersPublic Successful Response
   * @throws ApiError
   */
  public static readFamilyMembers(
    data: FamiliesReadFamilyMembersData,
  ): CancelablePromise<FamiliesReadFamilyMembersResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/families/{family_id}/members",
      path: {
        family_id: data.familyId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Read Family Invite Code
   * Reads family invite code.
   * @param data The data for the request.
   * @param data.familyId
   * @returns string Successful Response
   * @throws ApiError
   */
  public static readFamilyInviteCode(
    data: FamiliesReadFamilyInviteCodeData,
  ): CancelablePromise<FamiliesReadFamilyInviteCodeResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/families/{family_id}/invite-code",
      path: {
        family_id: data.familyId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class ListsService {
  /**
   * Read Personal Lists
   * Retrieve personal lists.
   * @returns ListsPublic Successful Response
   * @throws ApiError
   */
  public static readPersonalLists(): CancelablePromise<ListsReadPersonalListsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/lists/personal",
    });
  }

  /**
   * Read Family Lists
   * Retrieve family lists.
   * @returns ListsPublic Successful Response
   * @throws ApiError
   */
  public static readFamilyLists(): CancelablePromise<ListsReadFamilyListsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/lists/family",
    });
  }

  /**
   * Read List
   * Retrieve list.
   * @param data The data for the request.
   * @param data.listId
   * @returns List Successful Response
   * @throws ApiError
   */
  public static readList(
    data: ListsReadListData,
  ): CancelablePromise<ListsReadListResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/lists/{list_id}",
      path: {
        list_id: data.listId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Update List
   * Update list.
   * @param data The data for the request.
   * @param data.listId
   * @param data.requestBody
   * @returns ListPublic Successful Response
   * @throws ApiError
   */
  public static updateList(
    data: ListsUpdateListData,
  ): CancelablePromise<ListsUpdateListResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/lists/{list_id}",
      path: {
        list_id: data.listId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Delete List
   * Delete list
   * @param data The data for the request.
   * @param data.listId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteList(
    data: ListsDeleteListData,
  ): CancelablePromise<ListsDeleteListResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/lists/{list_id}",
      path: {
        list_id: data.listId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Create List
   * Create new list.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns ListPublic Successful Response
   * @throws ApiError
   */
  public static createList(
    data: ListsCreateListData,
  ): CancelablePromise<ListsCreateListResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/lists/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class LoginService {
  /**
   * Login Access Token
   * Authenticates a user and returns an access token if credentials are correct.
   * @param data The data for the request.
   * @param data.formData
   * @returns Token Successful Response
   * @throws ApiError
   */
  public static loginAccessToken(
    data: LoginLoginAccessTokenData,
  ): CancelablePromise<LoginLoginAccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/login/access-token",
      formData: data.formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Test Token
   * Test access token
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static testToken(): CancelablePromise<LoginTestTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/login/test-token",
    });
  }
}

export class PingService {
  /**
   * Ping
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static ping(): CancelablePromise<PingPingResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/ping/",
    });
  }
}

export class TasksService {
  /**
   * Read Tasks
   * Retrieve tasks.
   * @param data The data for the request.
   * @param data.listId
   * @param data.skip
   * @param data.limit
   * @returns TasksPublic Successful Response
   * @throws ApiError
   */
  public static readTasks(
    data: TasksReadTasksData,
  ): CancelablePromise<TasksReadTasksResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/tasks/{list_id}",
      path: {
        list_id: data.listId,
      },
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Create Task
   * Create new task.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns TaskPublic Successful Response
   * @throws ApiError
   */
  public static createTask(
    data: TasksCreateTaskData,
  ): CancelablePromise<TasksCreateTaskResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/tasks/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Update Task
   * Update task.
   * @param data The data for the request.
   * @param data.taskId
   * @param data.requestBody
   * @returns TaskPublic Successful Response
   * @throws ApiError
   */
  public static updateTask(
    data: TasksUpdateTaskData,
  ): CancelablePromise<TasksUpdateTaskResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/tasks/{task_id}",
      path: {
        task_id: data.taskId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Delete Task
   * Delete task
   * @param data The data for the request.
   * @param data.taskId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteTask(
    data: TasksDeleteTaskData,
  ): CancelablePromise<TasksDeleteTaskResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/tasks/{task_id}",
      path: {
        task_id: data.taskId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Update Task Status
   * Update task status.
   * @param data The data for the request.
   * @param data.taskId
   * @param data.completed
   * @returns TaskPublic Successful Response
   * @throws ApiError
   */
  public static updateTaskStatus(
    data: TasksUpdateTaskStatusData,
  ): CancelablePromise<TasksUpdateTaskStatusResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/tasks/{task_id}/status",
      path: {
        task_id: data.taskId,
      },
      query: {
        completed: data.completed,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Clear Tasks
   * Clears a lists tasks. Only completed tasks will get cleared.
   * @param data The data for the request.
   * @param data.listId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static clearTasks(
    data: TasksClearTasksData,
  ): CancelablePromise<TasksClearTasksResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/tasksclear/{list_id}",
      path: {
        list_id: data.listId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class UsersService {
  /**
   * Read User Me
   * Retrieves the current authenticated user's information.
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUserMe(): CancelablePromise<UsersReadUserMeResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/users/me",
    });
  }

  /**
   * Read User
   * Retrieves a user's information by id.
   * @param data The data for the request.
   * @param data.userId
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUser(
    data: UsersReadUserData,
  ): CancelablePromise<UsersReadUserResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Register User
   * Create new user without the need to be logged in.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static registerUser(
    data: UsersRegisterUserData,
  ): CancelablePromise<UsersRegisterUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/users/signup",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Promote User
   * Promotes a user to admin. The current admin gets demoted to regular user.
   * @param data The data for the request.
   * @param data.userId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static promoteUser(
    data: UsersPromoteUserData,
  ): CancelablePromise<UsersPromoteUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/users/promote/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}
