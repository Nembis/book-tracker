FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /api

COPY ./BookTracker/BookTracker.csproj ./BookTracker/BookTracker.csproj

RUN dotnet restore ./BookTracker/BookTracker.csproj

COPY ./BookTracker ./BookTracker

EXPOSE 80

ENTRYPOINT ["dotnet", "run", "--project", "./BookTracker/BookTracker.csproj", "--urls", "http://*:80"]

