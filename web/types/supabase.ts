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
  "/soundbites": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.soundbites.id"];
          title?: parameters["rowFilter.soundbites.title"];
          description?: parameters["rowFilter.soundbites.description"];
          thumbnailUrl?: parameters["rowFilter.soundbites.thumbnailUrl"];
          soundbite?: parameters["rowFilter.soundbites.soundbite"];
          length?: parameters["rowFilter.soundbites.length"];
          views?: parameters["rowFilter.soundbites.views"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
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
          soundbite?: parameters["rowFilter.soundbites.soundbite"];
          length?: parameters["rowFilter.soundbites.length"];
          views?: parameters["rowFilter.soundbites.views"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
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
          soundbite?: parameters["rowFilter.soundbites.soundbite"];
          length?: parameters["rowFilter.soundbites.length"];
          views?: parameters["rowFilter.soundbites.views"];
          userId?: parameters["rowFilter.soundbites.userId"];
          createdAt?: parameters["rowFilter.soundbites.createdAt"];
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
}

export interface definitions {
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
  soundbites: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    title: string;
    description?: string;
    thumbnailUrl?: string;
    /**
     * Note:
     * This is a Foreign Key to `objects.id`.<fk table='objects' column='id'/>
     */
    soundbite: string;
    length: number;
    views?: number;
    userId: string;
    createdAt?: string;
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
  /** profiles */
  "body.profiles": definitions["profiles"];
  "rowFilter.profiles.id": string;
  "rowFilter.profiles.username": string;
  "rowFilter.profiles.displayName": string;
  "rowFilter.profiles.bio": string;
  "rowFilter.profiles.createdAt": string;
  "rowFilter.profiles.avatarUrl": string;
  /** soundbites */
  "body.soundbites": definitions["soundbites"];
  "rowFilter.soundbites.id": string;
  "rowFilter.soundbites.title": string;
  "rowFilter.soundbites.description": string;
  "rowFilter.soundbites.thumbnailUrl": string;
  "rowFilter.soundbites.soundbite": string;
  "rowFilter.soundbites.length": string;
  "rowFilter.soundbites.views": string;
  "rowFilter.soundbites.userId": string;
  "rowFilter.soundbites.createdAt": string;
}

export interface operations {}