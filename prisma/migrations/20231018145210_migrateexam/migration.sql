-- CreateTable
CREATE TABLE "TVShowModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "investment" INTEGER NOT NULL,
    "cast" TEXT NOT NULL,

    CONSTRAINT "TVShowModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeasonModel" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "episodesNumber" INTEGER NOT NULL,
    "tvshowId" INTEGER NOT NULL,

    CONSTRAINT "SeasonModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SeasonModel" ADD CONSTRAINT "SeasonModel_tvshowId_fkey" FOREIGN KEY ("tvshowId") REFERENCES "TVShowModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
