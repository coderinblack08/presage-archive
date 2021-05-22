/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/comments": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          soundbite_id?: parameters["rowFilter.comments.soundbite_id"];
          parent_id?: parameters["rowFilter.comments.parent_id"];
          body?: parameters["rowFilter.comments.body"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["comments"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          soundbite_id?: parameters["rowFilter.comments.soundbite_id"];
          parent_id?: parameters["rowFilter.comments.parent_id"];
          body?: parameters["rowFilter.comments.body"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.comments.id"];
          user_id?: parameters["rowFilter.comments.user_id"];
          soundbite_id?: parameters["rowFilter.comments.soundbite_id"];
          parent_id?: parameters["rowFilter.comments.parent_id"];
          body?: parameters["rowFilter.comments.body"];
        };
        body: {
          /** comments */
          comments?: definitions["comments"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          displayName?: parameters["rowFilter.profiles.displayName"];
          bio?: parameters["rowFilter.profiles.bio"];
          createdAt?: parameters["rowFilter.profiles.createdAt"];
          avatarUrl?: parameters["rowFilter.profiles.avatarUrl"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          displayName?: parameters["rowFilter.profiles.displayName"];
          bio?: parameters["rowFilter.profiles.bio"];
          createdAt?: parameters["rowFilter.profiles.createdAt"];
          avatarUrl?: parameters["rowFilter.profiles.avatarUrl"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          displayName?: parameters["rowFilter.profiles.displayName"];
          bio?: parameters["rowFilter.profiles.bio"];
          createdAt?: parameters["rowFilter.profiles.createdAt"];
          avatarUrl?: parameters["rowFilter.profiles.avatarUrl"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/soundbite_details": {
    get: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.soundbite_details.soundbite_id"];
          upvotes?: parameters["rowFilter.soundbite_details.upvotes"];
          views?: parameters["rowFilter.soundbite_details.views"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["soundbite_details"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** soundbite_details */
          soundbite_details?: definitions["soundbite_details"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.soundbite_details.soundbite_id"];
          upvotes?: parameters["rowFilter.soundbite_details.upvotes"];
          views?: parameters["rowFilter.soundbite_details.views"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.soundbite_details.soundbite_id"];
          upvotes?: parameters["rowFilter.soundbite_details.upvotes"];
          views?: parameters["rowFilter.soundbite_details.views"];
        };
        body: {
          /** soundbite_details */
          soundbite_details?: definitions["soundbite_details"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/soundbites": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.soundbites.id"];
          title?: parameters["rowFilter.soundbites.title"];
          description?: parameters["rowFilter.soundbites.description"];
          thumbnailUrl?: parameters["rowFilter.soundbites.thumbnailUrl"];
          length?: parameters["rowFilter.soundbites.length"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
          audio?: parameters["rowFilter.soundbites.audio"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["soundbites"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** soundbites */
          soundbites?: definitions["soundbites"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.soundbites.id"];
          title?: parameters["rowFilter.soundbites.title"];
          description?: parameters["rowFilter.soundbites.description"];
          thumbnailUrl?: parameters["rowFilter.soundbites.thumbnailUrl"];
          length?: parameters["rowFilter.soundbites.length"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
          audio?: parameters["rowFilter.soundbites.audio"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.soundbites.id"];
          title?: parameters["rowFilter.soundbites.title"];
          description?: parameters["rowFilter.soundbites.description"];
          thumbnailUrl?: parameters["rowFilter.soundbites.thumbnailUrl"];
          length?: parameters["rowFilter.soundbites.length"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
          audio?: parameters["rowFilter.soundbites.audio"];
        };
        body: {
          /** soundbites */
          soundbites?: definitions["soundbites"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/supascript_js_modules": {
    get: {
      parameters: {
        query: {
          module?: parameters["rowFilter.supascript_js_modules.module"];
          autoload?: parameters["rowFilter.supascript_js_modules.autoload"];
          source?: parameters["rowFilter.supascript_js_modules.source"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["supascript_js_modules"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** supascript_js_modules */
          supascript_js_modules?: definitions["supascript_js_modules"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          module?: parameters["rowFilter.supascript_js_modules.module"];
          autoload?: parameters["rowFilter.supascript_js_modules.autoload"];
          source?: parameters["rowFilter.supascript_js_modules.source"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          module?: parameters["rowFilter.supascript_js_modules.module"];
          autoload?: parameters["rowFilter.supascript_js_modules.autoload"];
          source?: parameters["rowFilter.supascript_js_modules.source"];
        };
        body: {
          /** supascript_js_modules */
          supascript_js_modules?: definitions["supascript_js_modules"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/supascript_log": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.supascript_log.id"];
          created?: parameters["rowFilter.supascript_log.created"];
          _catalog?: parameters["rowFilter.supascript_log._catalog"];
          _user?: parameters["rowFilter.supascript_log._user"];
          _schema?: parameters["rowFilter.supascript_log._schema"];
          _schemas?: parameters["rowFilter.supascript_log._schemas"];
          _pid?: parameters["rowFilter.supascript_log._pid"];
          log_type?: parameters["rowFilter.supascript_log.log_type"];
          query?: parameters["rowFilter.supascript_log.query"];
          content?: parameters["rowFilter.supascript_log.content"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["supascript_log"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** supascript_log */
          supascript_log?: definitions["supascript_log"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.supascript_log.id"];
          created?: parameters["rowFilter.supascript_log.created"];
          _catalog?: parameters["rowFilter.supascript_log._catalog"];
          _user?: parameters["rowFilter.supascript_log._user"];
          _schema?: parameters["rowFilter.supascript_log._schema"];
          _schemas?: parameters["rowFilter.supascript_log._schemas"];
          _pid?: parameters["rowFilter.supascript_log._pid"];
          log_type?: parameters["rowFilter.supascript_log.log_type"];
          query?: parameters["rowFilter.supascript_log.query"];
          content?: parameters["rowFilter.supascript_log.content"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.supascript_log.id"];
          created?: parameters["rowFilter.supascript_log.created"];
          _catalog?: parameters["rowFilter.supascript_log._catalog"];
          _user?: parameters["rowFilter.supascript_log._user"];
          _schema?: parameters["rowFilter.supascript_log._schema"];
          _schemas?: parameters["rowFilter.supascript_log._schemas"];
          _pid?: parameters["rowFilter.supascript_log._pid"];
          log_type?: parameters["rowFilter.supascript_log.log_type"];
          query?: parameters["rowFilter.supascript_log.query"];
          content?: parameters["rowFilter.supascript_log.content"];
        };
        body: {
          /** supascript_log */
          supascript_log?: definitions["supascript_log"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/upvotes": {
    get: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.upvotes.soundbite_id"];
          user_id?: parameters["rowFilter.upvotes.user_id"];
          value?: parameters["rowFilter.upvotes.value"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["upvotes"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** upvotes */
          upvotes?: definitions["upvotes"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.upvotes.soundbite_id"];
          user_id?: parameters["rowFilter.upvotes.user_id"];
          value?: parameters["rowFilter.upvotes.value"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          soundbite_id?: parameters["rowFilter.upvotes.soundbite_id"];
          user_id?: parameters["rowFilter.upvotes.user_id"];
          value?: parameters["rowFilter.upvotes.value"];
        };
        body: {
          /** upvotes */
          upvotes?: definitions["upvotes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/urlencode": {
    post: {
      parameters: {
        body: {
          args: {
            string: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/supascript_init": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/upvote_soundbite": {
    post: {
      parameters: {
        body: {
          args: {
            value: number;
            soundbite_id: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_upvote": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_remove_upvote": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_set_curlopt": {
    post: {
      parameters: {
        body: {
          args: {
            value: string;
            curlopt: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_upvote": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http": {
    post: {
      parameters: {
        body: {
          args: {
            request: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_removed_upvote": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_put": {
    post: {
      parameters: {
        body: {
          args: {
            content_type: string;
            uri: string;
            content: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_reset_curlopt": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_delete": {
    post: {
      parameters: {
        body: {
          args: {
            uri: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_patch": {
    post: {
      parameters: {
        body: {
          args: {
            content_type: string;
            uri: string;
            content: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_get": {
    post: {
      parameters: {
        body: {
          args: {
            uri: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_updated_upvote": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_head": {
    post: {
      parameters: {
        body: {
          args: {
            uri: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_post": {
    post: {
      parameters: {
        body: {
          args: {
            content_type: string;
            uri: string;
            content: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_soundbite": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/http_header": {
    post: {
      parameters: {
        body: {
          args: {
            field: string;
            value: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  comments: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
    /**
     * Note:
     * This is a Foreign Key to `soundbites.id`.<fk table='soundbites' column='id'/>
     */
    soundbite_id: string;
    /**
     * Note:
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    parent_id: number;
    body: string;
  };
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    id: string;
    username?: string;
    displayName?: string;
    bio?: string;
    createdAt?: string;
    avatarUrl?: string;
  };
  soundbite_details: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `soundbites.id`.<fk table='soundbites' column='id'/>
     */
    soundbite_id: string;
    upvotes?: number;
    views?: number;
  };
  soundbites: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    title: string;
    description?: string;
    thumbnailUrl?: string;
    length: number;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    userId: string;
    createdAt?: string;
    audio: string;
  };
  supascript_js_modules: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    module: string;
    autoload?: boolean;
    source?: string;
  };
  supascript_log: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    created?: string;
    _catalog?: string;
    _user?: string;
    _schema?: string;
    _schemas?: string;
    _pid?: number;
    log_type?: string;
    query?: string;
    content?: string;
  };
  upvotes: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `soundbites.id`.<fk table='soundbites' column='id'/>
     */
    soundbite_id: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
    value?: number;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** comments */
  "body.comments": definitions["comments"];
  "rowFilter.comments.id": string;
  "rowFilter.comments.user_id": string;
  "rowFilter.comments.soundbite_id": string;
  "rowFilter.comments.parent_id": string;
  "rowFilter.comments.body": string;
  /** profiles */
  "body.profiles": definitions["profiles"];
  "rowFilter.profiles.id": string;
  "rowFilter.profiles.username": string;
  "rowFilter.profiles.displayName": string;
  "rowFilter.profiles.bio": string;
  "rowFilter.profiles.createdAt": string;
  "rowFilter.profiles.avatarUrl": string;
  /** soundbite_details */
  "body.soundbite_details": definitions["soundbite_details"];
  "rowFilter.soundbite_details.soundbite_id": string;
  "rowFilter.soundbite_details.upvotes": string;
  "rowFilter.soundbite_details.views": string;
  /** soundbites */
  "body.soundbites": definitions["soundbites"];
  "rowFilter.soundbites.id": string;
  "rowFilter.soundbites.title": string;
  "rowFilter.soundbites.description": string;
  "rowFilter.soundbites.thumbnailUrl": string;
  "rowFilter.soundbites.length": string;
  "rowFilter.soundbites.userId": string;
  "rowFilter.soundbites.createdAt": string;
  "rowFilter.soundbites.audio": string;
  /** supascript_js_modules */
  "body.supascript_js_modules": definitions["supascript_js_modules"];
  "rowFilter.supascript_js_modules.module": string;
  "rowFilter.supascript_js_modules.autoload": string;
  "rowFilter.supascript_js_modules.source": string;
  /** supascript_log */
  "body.supascript_log": definitions["supascript_log"];
  "rowFilter.supascript_log.id": string;
  "rowFilter.supascript_log.created": string;
  "rowFilter.supascript_log._catalog": string;
  "rowFilter.supascript_log._user": string;
  "rowFilter.supascript_log._schema": string;
  "rowFilter.supascript_log._schemas": string;
  "rowFilter.supascript_log._pid": string;
  "rowFilter.supascript_log.log_type": string;
  "rowFilter.supascript_log.query": string;
  "rowFilter.supascript_log.content": string;
  /** upvotes */
  "body.upvotes": definitions["upvotes"];
  "rowFilter.upvotes.soundbite_id": string;
  "rowFilter.upvotes.user_id": string;
  "rowFilter.upvotes.value": string;
}

export interface operations {}
