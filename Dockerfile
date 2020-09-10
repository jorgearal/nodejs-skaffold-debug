FROM node:12.16.3

RUN mkdir /app/

ENV WORK_DIRECTORY=/app/

# Set timezone
RUN echo "America/Bogota" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

VOLUME /root/.npm

WORKDIR $WORK_DIRECTORY

COPY package.json $WORK_DIRECTORY

RUN npm install --quiet 

COPY . $WORK_DIRECTORY

EXPOSE 3000 9229

CMD ["npm", "run", "debug"]