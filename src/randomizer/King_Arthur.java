package randomizer;

public class King_Arthur extends godClass{ 
    public King_Arthur() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    King_Arthur test = new King_Arthur();
    System.out.println(test.getDamageType());
    }
}
