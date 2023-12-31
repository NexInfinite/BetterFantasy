CREATE TYPE "drivers" AS ENUM (
  'Bottas',
  'Guanyu',
  'Ricciardo',
  'Tsunoda',
  'Gasly',
  'Ocon',
  'Alonso',
  'Stroll',
  'Leclerc',
  'Sainz',
  'Hulkenberg',
  'Magnussen',
  'Norris',
  'Piastri',
  'Hamilton',
  'Russell',
  'Perez',
  'Verstappen',
  'Albon',
  'Sargent'
);

CREATE TABLE "Users" (
  "user_id" integer PRIMARY KEY,
  "username" varchar,
  "created_at" timestamp,
  "email" string,
  "deleted" boolean
);

CREATE TABLE "Passwords" (
  "user_id" integer,
  "hash" hash,
  "salt" salt
);

CREATE TABLE "UserRoles" (
  "role_id" integer,
  "user_id" integer
);

CREATE TABLE "Roles" (
  "role_id" integer PRIMARY KEY,
  "name" string,
  "access" integer
);

CREATE TABLE "Leagues" (
  "league_id" integer PRIMARY KEY,
  "leader" integer,
  "rules" json,
  "boosts" json
);

CREATE TABLE "Teams" (
  "user_id" integer,
  "league" integer,
  "drivers" drivers,
  "boost" json
);

COMMENT ON COLUMN "Roles"."access" IS 'Role integer works like discord, using binary flags for each role access';

COMMENT ON COLUMN "Leagues"."rules" IS 'Rules must be validated by allowed rules';

COMMENT ON COLUMN "Teams"."drivers" IS '5 Drivers';

ALTER TABLE "Passwords" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "UserRoles" ADD FOREIGN KEY ("role_id") REFERENCES "Roles" ("role_id");

ALTER TABLE "UserRoles" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Leagues" ADD FOREIGN KEY ("leader") REFERENCES "Users" ("user_id");

ALTER TABLE "Teams" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Teams" ADD FOREIGN KEY ("league") REFERENCES "Leagues" ("league_id");

ALTER TABLE "Teams" ADD FOREIGN KEY ("boost") REFERENCES "Leagues" ("boosts");
