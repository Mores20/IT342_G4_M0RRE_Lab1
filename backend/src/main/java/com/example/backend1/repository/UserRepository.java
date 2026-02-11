package com.example.backend1.repository;

import com.example.backend1.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email); // needed for AuthService

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
