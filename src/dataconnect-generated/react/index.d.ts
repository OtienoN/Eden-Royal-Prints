import { CreateProjectData, CreateProjectVariables, GetMyProjectsData, FollowUserData, FollowUserVariables, ListUsersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateProject(options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, CreateProjectVariables>): UseDataConnectMutationResult<CreateProjectData, CreateProjectVariables>;
export function useCreateProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, CreateProjectVariables>): UseDataConnectMutationResult<CreateProjectData, CreateProjectVariables>;

export function useGetMyProjects(options?: useDataConnectQueryOptions<GetMyProjectsData>): UseDataConnectQueryResult<GetMyProjectsData, undefined>;
export function useGetMyProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProjectsData>): UseDataConnectQueryResult<GetMyProjectsData, undefined>;

export function useFollowUser(options?: useDataConnectMutationOptions<FollowUserData, FirebaseError, FollowUserVariables>): UseDataConnectMutationResult<FollowUserData, FollowUserVariables>;
export function useFollowUser(dc: DataConnect, options?: useDataConnectMutationOptions<FollowUserData, FirebaseError, FollowUserVariables>): UseDataConnectMutationResult<FollowUserData, FollowUserVariables>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
