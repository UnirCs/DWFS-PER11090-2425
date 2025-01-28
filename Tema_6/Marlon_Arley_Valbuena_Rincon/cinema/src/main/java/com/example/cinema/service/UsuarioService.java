package com.example.cinema.service;

import com.example.cinema.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private List<Usuario> usuarios = new ArrayList<>();

    public Usuario agregarUsuario(Usuario usuario) {
        usuarios.add(usuario);
        return usuario;
    }

    public void removerUsuario(Long id) {
        usuarios.removeIf(usuario -> usuario.getId().equals(id));
    }

    public Usuario modificarUsuario(Long id, Usuario usuario) {
        Optional<Usuario> existeUsuario = usuarios.stream().filter(u -> u.getId().equals(id)).findFirst();
        if (existeUsuario.isPresent()) {
            Usuario usuarioActualizado = existeUsuario.get();
            if (usuario.getNombre() != null) {
                usuarioActualizado.setNombre(usuario.getNombre());
            }
            if (usuario.getEmail() != null) {
                usuarioActualizado.setEmail(usuario.getEmail());
            }
            return usuarioActualizado;
        }
        return null;
    }

    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarios;
    }
}