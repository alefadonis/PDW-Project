FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER=postgres \
  POSTGRES_PASSWORD=password \
  POSTGRES_DB=qr_attendance

# Expose the PostgreSQL port
EXPOSE 5431

# Run the PostgreSQL server
CMD ["postgres", "-p", "5431"]