import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateProjectVariables {
  name: string;
  description: string;
  repositoryUrl: string;
}

export interface FollowUserData {
  follow_insert: Follow_Key;
}

export interface FollowUserVariables {
  followedId: UUIDString;
}

export interface Follow_Key {
  followerId: UUIDString;
  followedId: UUIDString;
  __typename?: 'Follow_Key';
}

export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description: string;
    repositoryUrl: string;
  } & Project_Key)[];
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    username: string;
    displayName?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
  } & User_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface Star_Key {
  userId: UUIDString;
  projectId: UUIDString;
  __typename?: 'Star_Key';
}

export interface UserSkill_Key {
  userId: UUIDString;
  skillId: UUIDString;
  __typename?: 'UserSkill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;
export function createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface GetMyProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
  operationName: string;
}
export const getMyProjectsRef: GetMyProjectsRef;

export function getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;
export function getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface FollowUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  operationName: string;
}
export const followUserRef: FollowUserRef;

export function followUser(vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;
export function followUser(dc: DataConnect, vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

