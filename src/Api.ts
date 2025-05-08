/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DbClient {
  /** @format uuid */
  userId?: string;
  user?: DbUser;
  /** @format uuid */
  id?: string;
  matchClients?: DbMatchClient[] | null;
  /** @format uuid */
  clientToTimeId?: string;
  clientToTime?: DbTimetableClient;
  class_1?: boolean;
  class_2?: boolean;
  class_3?: boolean;
  class_4?: boolean;
  class_5?: boolean;
  class_6?: boolean;
  class_7?: boolean;
  class_8?: boolean;
  class_9?: boolean;
  class_10?: boolean;
  class_11?: boolean;
  course_1?: boolean;
  course_2?: boolean;
  course_3?: boolean;
  course_4?: boolean;
  course_5?: boolean;
  course_6?: boolean;
  course_vypusknik?: boolean;
  course_not_important?: boolean;
  about_Pupil?: string | null;
  /** @format int32 */
  сost_From?: number;
  /** @format int32 */
  сost_To?: number;
  /** @format int32 */
  age_From?: number;
  /** @format int32 */
  age_To?: number;
  timetable_Zayavka?: string | null;
  u_Pupil?: boolean;
  u_Tutor?: boolean;
  distant?: boolean;
  sPb?: boolean;
  len?: boolean;
  other?: string | null;
  with_Expirience?: boolean;
  without_Expirience?: boolean;
}

export interface DbMatchClient {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  clientId?: string;
  client?: DbClient;
  /** @format uuid */
  subjectId?: string;
  subject?: DbSubject;
}

export interface DbMatchPerformer {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  performerId?: string;
  performer?: DbPerformer;
  /** @format uuid */
  subjectId?: string;
  subject?: DbSubject;
}

export interface DbPerformer {
  /** @format uuid */
  id?: string;
  matchPerformers?: DbMatchPerformer[] | null;
  /** @format uuid */
  performerToTimeId?: string;
  performerToTime?: DbTimetablePerformer;
  /** @format uuid */
  userId?: string;
  user?: DbUser;
  /** @format int32 */
  id_Role?: number;
  education_User?: string | null;
  /** @format int32 */
  course_User?: number;
  about_User?: string | null;
  timetable_Anketa?: string | null;
}

export interface DbSubject {
  /** @format uuid */
  id?: string;
  name_Subject?: string | null;
  matchClients?: DbMatchClient[] | null;
  matchPerformers?: DbMatchPerformer[] | null;
}

export interface DbTimetableClient {
  /** @format uuid */
  id?: string;
  client?: DbClient;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  arrangement?: boolean;
}

export interface DbTimetablePerformer {
  /** @format uuid */
  id?: string;
  timeToPerformer?: DbPerformer;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  arrangement?: boolean;
}

export interface DbUser {
  /** @format uuid */
  id?: string;
  performers?: DbPerformer[] | null;
  clients?: DbClient[] | null;
  name_User?: string | null;
  /** @format date */
  birth_User?: string;
  gender_User?: boolean;
  phone_User?: string | null;
  email_User?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:5148";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title backend
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Clients
     * @name ClientsList
     * @request GET:/api/Clients
     */
    clientsList: (params: RequestParams = {}) =>
      this.request<DbClient[], any>({
        path: `/api/Clients`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientsCreate
     * @request POST:/api/Clients
     */
    clientsCreate: (data: DbClient, params: RequestParams = {}) =>
      this.request<DbClient, any>({
        path: `/api/Clients`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientsDetail
     * @request GET:/api/Clients/{id}
     */
    clientsDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbClient, any>({
        path: `/api/Clients/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientsUpdate
     * @request PUT:/api/Clients/{id}
     */
    clientsUpdate: (id: string, data: DbClient, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Clients/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientsDelete
     * @request DELETE:/api/Clients/{id}
     */
    clientsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Clients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchClients
     * @name MatchClientsList
     * @request GET:/api/MatchClients
     */
    matchClientsList: (params: RequestParams = {}) =>
      this.request<DbMatchClient[], any>({
        path: `/api/MatchClients`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchClients
     * @name MatchClientsCreate
     * @request POST:/api/MatchClients
     */
    matchClientsCreate: (data: DbMatchClient, params: RequestParams = {}) =>
      this.request<DbMatchClient, any>({
        path: `/api/MatchClients`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchClients
     * @name MatchClientsDetail
     * @request GET:/api/MatchClients/{id}
     */
    matchClientsDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbMatchClient, any>({
        path: `/api/MatchClients/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchClients
     * @name MatchClientsUpdate
     * @request PUT:/api/MatchClients/{id}
     */
    matchClientsUpdate: (
      id: string,
      data: DbMatchClient,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/MatchClients/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchClients
     * @name MatchClientsDelete
     * @request DELETE:/api/MatchClients/{id}
     */
    matchClientsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/MatchClients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchPerformers
     * @name MatchPerformersList
     * @request GET:/api/MatchPerformers
     */
    matchPerformersList: (params: RequestParams = {}) =>
      this.request<DbMatchPerformer[], any>({
        path: `/api/MatchPerformers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchPerformers
     * @name MatchPerformersCreate
     * @request POST:/api/MatchPerformers
     */
    matchPerformersCreate: (
      data: DbMatchPerformer,
      params: RequestParams = {},
    ) =>
      this.request<DbMatchPerformer, any>({
        path: `/api/MatchPerformers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchPerformers
     * @name MatchPerformersDetail
     * @request GET:/api/MatchPerformers/{id}
     */
    matchPerformersDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbMatchPerformer, any>({
        path: `/api/MatchPerformers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchPerformers
     * @name MatchPerformersUpdate
     * @request PUT:/api/MatchPerformers/{id}
     */
    matchPerformersUpdate: (
      id: string,
      data: DbMatchPerformer,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/MatchPerformers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MatchPerformers
     * @name MatchPerformersDelete
     * @request DELETE:/api/MatchPerformers/{id}
     */
    matchPerformersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/MatchPerformers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Performers
     * @name PerformersList
     * @request GET:/api/Performers
     */
    performersList: (params: RequestParams = {}) =>
      this.request<DbPerformer[], any>({
        path: `/api/Performers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Performers
     * @name PerformersCreate
     * @request POST:/api/Performers
     */
    performersCreate: (data: DbPerformer, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Performers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Performers
     * @name PerformersDetail
     * @request GET:/api/Performers/{id}
     */
    performersDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbPerformer, any>({
        path: `/api/Performers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Performers
     * @name PerformersUpdate
     * @request PUT:/api/Performers/{id}
     */
    performersUpdate: (
      id: string,
      data: DbPerformer,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Performers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Performers
     * @name PerformersDelete
     * @request DELETE:/api/Performers/{id}
     */
    performersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Performers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subjects
     * @name SubjectsList
     * @request GET:/api/Subjects
     */
    subjectsList: (params: RequestParams = {}) =>
      this.request<DbSubject[], any>({
        path: `/api/Subjects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subjects
     * @name SubjectsCreate
     * @request POST:/api/Subjects
     */
    subjectsCreate: (data: DbSubject, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Subjects`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subjects
     * @name SubjectsDetail
     * @request GET:/api/Subjects/{id}
     */
    subjectsDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbSubject, any>({
        path: `/api/Subjects/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subjects
     * @name SubjectsUpdate
     * @request PUT:/api/Subjects/{id}
     */
    subjectsUpdate: (id: string, data: DbSubject, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Subjects/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subjects
     * @name SubjectsDelete
     * @request DELETE:/api/Subjects/{id}
     */
    subjectsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Subjects/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesClients
     * @name TimetablesClientsList
     * @request GET:/api/timetables-clients
     */
    timetablesClientsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/timetables-clients`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesClients
     * @name TimetablesClientsCreate
     * @request POST:/api/timetables-clients
     */
    timetablesClientsCreate: (
      data: DbTimetableClient,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/timetables-clients`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesClients
     * @name TimetablesClientsDetail
     * @request GET:/api/timetables-clients/{id}
     */
    timetablesClientsDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/timetables-clients/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesClients
     * @name TimetablesClientsUpdate
     * @request PUT:/api/timetables-clients/{id}
     */
    timetablesClientsUpdate: (
      id: string,
      data: DbTimetableClient,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/timetables-clients/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesClients
     * @name TimetablesClientsDelete
     * @request DELETE:/api/timetables-clients/{id}
     */
    timetablesClientsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/timetables-clients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesPerformers
     * @name TimetablesPerformersList
     * @request GET:/api/TimetablesPerformers
     */
    timetablesPerformersList: (params: RequestParams = {}) =>
      this.request<DbTimetablePerformer[], any>({
        path: `/api/TimetablesPerformers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesPerformers
     * @name TimetablesPerformersCreate
     * @request POST:/api/TimetablesPerformers
     */
    timetablesPerformersCreate: (
      data: DbTimetablePerformer,
      params: RequestParams = {},
    ) =>
      this.request<DbTimetablePerformer, any>({
        path: `/api/TimetablesPerformers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesPerformers
     * @name TimetablesPerformersDetail
     * @request GET:/api/TimetablesPerformers/{id}
     */
    timetablesPerformersDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbTimetablePerformer, any>({
        path: `/api/TimetablesPerformers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesPerformers
     * @name TimetablesPerformersUpdate
     * @request PUT:/api/TimetablesPerformers/{id}
     */
    timetablesPerformersUpdate: (
      id: string,
      data: DbTimetablePerformer,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/TimetablesPerformers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TimetablesPerformers
     * @name TimetablesPerformersDelete
     * @request DELETE:/api/TimetablesPerformers/{id}
     */
    timetablesPerformersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/TimetablesPerformers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersList
     * @request GET:/api/Users
     */
    usersList: (params: RequestParams = {}) =>
      this.request<DbUser[], any>({
        path: `/api/Users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersCreate
     * @request POST:/api/Users
     */
    usersCreate: (data: DbUser, params: RequestParams = {}) =>
      this.request<DbUser, any>({
        path: `/api/Users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDetail
     * @request GET:/api/Users/{id}
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<DbUser, any>({
        path: `/api/Users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersUpdate
     * @request PUT:/api/Users/{id}
     */
    usersUpdate: (id: string, data: DbUser, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDelete
     * @request DELETE:/api/Users/{id}
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
